import { useQuery } from "@tanstack/react-query";
import fetchProduct from "./fetchProduct";

export default function useProduct(data) {
  const results = useQuery(["slug", data], fetchProduct);

  return [results?.data?.slug ?? [], results.status];
}
