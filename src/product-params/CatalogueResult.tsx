import ProductCatalogue from "./productCatalogue";

export default function CatalogueResult({ category }) {
  return (
    <div>
      {!category ? (
        <h1>category is error</h1>
      ) : (
        category.map((category) => {
          return (
            <ProductCatalogue
              isNew={category.new}
              productName={category.name}
              description={category.description}
              link={category.slug}
            />
          );
        })
      )}
    </div>
  );
}
