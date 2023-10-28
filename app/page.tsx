import styles from "./page.module.css"
import Products from "@/components/Products"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate
} from "@tanstack/react-query"
import { getProducts } from "@/util/getProducts"

export default async function Home() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: getProducts
  })
  return (
    <main className={styles.main}>
      <h1>NextJS 14</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Products />
      </HydrationBoundary>
    </main>
  )
}
