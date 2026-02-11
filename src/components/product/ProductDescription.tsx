const ProductDescription = () => {
  return (
    <div className="space-y-10 md:space-y-12">
      {/* Details */}
      <div className="space-y-4">
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-concrete font-sans font-medium">Details</h3>
        <ul className="space-y-1.5">
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- 18k Gold Plated Sterling Silver</li>
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Dimensions: 2.5cm x 1.2cm</li>
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Weight: 4.2g per earring</li>
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Post and butterfly back closure</li>
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Hypoallergenic</li>
        </ul>
        <p className="text-[13px] font-mono text-concrete leading-[1.8] pt-2">
          Model is 5'10" / 178 cms and wears size S
        </p>
      </div>

      {/* Care */}
      <div className="space-y-4">
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-concrete font-sans font-medium">Care</h3>
        <p className="text-[13px] font-mono text-concrete leading-[1.8]">Material: 18k Gold Plated Sterling Silver</p>
        <ul className="space-y-1.5">
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Clean with a soft, dry cloth after each wear</li>
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Avoid contact with perfumes, lotions, and cleaning products</li>
          <li className="text-[13px] font-mono text-concrete leading-[1.8]">- Store in the provided jewelry pouch when not wearing</li>
        </ul>
      </div>

      {/* Shipping */}
      <div className="space-y-4">
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-concrete font-sans font-medium">Shipping</h3>
        <p className="text-[13px] font-mono text-concrete leading-[1.8]">
          Complimentary shipping on all orders over €500
        </p>
        <p className="text-[13px] font-mono text-concrete leading-[1.8]">
          We offer returns and exchanges on all orders — <a href="/customer-care" className="underline underline-offset-4 hover:text-foreground transition-colors">details here</a>
        </p>
      </div>

      {/* Klarna */}
      <div className="space-y-4">
        <h3 className="text-[11px] tracking-[0.15em] uppercase text-concrete font-sans font-medium">Klarna</h3>
        <p className="text-[13px] font-mono text-concrete leading-[1.8]">
          Spread the cost and pay in 3 interest-free installments of <span className="text-saffron">€950.00</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDescription;
