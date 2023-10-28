"use client"

import { getProducts } from "@/util/getProducts"
import React from "react"
import { useQuery } from "@tanstack/react-query"

const Products = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts
  })
  return <div>{data?.map((item: { name: string }) => item?.name)}</div>
}

export default Products
