const product = {
  name: "product",
  label: "Products",
  path: "content/products",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
    },
    {
      type: "number",
      name: "price",
      label: "Price",
    },
    {
      type: "image",
      name: "image",
      label: "Product Image",
    },
    {
      type: "rich-text",
      name: "description",
      label: "Description",
    },
  ],
};

export default product;
