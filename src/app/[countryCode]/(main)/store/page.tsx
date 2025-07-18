import { Metadata } from "next"

import StoreTemplate from "@modules/store/templates"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

type Params = {
  searchParams: Promise<{
    page?: string
    category_id?: string
  }>
  params: Promise<{
    countryCode: string
  }>
}

export default async function StorePage(props: Params) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const {
    page,
    category_id : categoryId
  } = searchParams

  return (
    <StoreTemplate
      page={page}
      countryCode={params.countryCode}
      activeFilters={{ categoryId }}
    />
  )
}
