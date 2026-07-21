import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("w-full", className)} {...props}>
      {children}
    </div>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-b border-border py-6 first:pt-0 last:border-0", className)}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const contentRef = React.useRef(null);
  
  // Expose toggle method to parent
  React.useImperativeHandle(ref, () => ({
    toggle: () => setIsOpen(!isOpen),
    isOpen
  }));

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="flex w-full items-center justify-between py-4 text-left font-semibold text-primary transition-colors hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
    >
      <span className="text-xl md:text-2xl">{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 shrink-0 text-secondary transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  // Find parent accordion item and listen for changes
  React.useEffect(() => {
    const parent = ref.current?.closest('[data-accordion-item]');
    if (parent) {
      const observer = new MutationObserver(() => {
        setIsOpen(parent.getAttribute('data-open') === 'true');
      });
      observer.observe(parent, { attributes: true, attributeFilter: ['data-open'] });
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-base text-secondary leading-relaxed transition-all duration-200",
        isOpen ? "max-h-96 pt-2" : "max-h-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
