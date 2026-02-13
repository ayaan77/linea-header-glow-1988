interface ContentSectionProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const ContentSection = ({ title, children, className = "" }: ContentSectionProps) => {
  return (
    <section className={`pr-6 py-16 ${className}`}>
      {title && (
        <h2 className="type-section text-foreground mb-8">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};

export default ContentSection;