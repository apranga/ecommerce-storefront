"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback } from "react"

import SortProducts, { SortOptions } from "./sort-products"
import { StoreProductCategory } from "@medusajs/types"
import FilterProductsByCategory, { ActiveFilterOptionValues } from "./filter-products-by-category"

type SortRefinementListProps = {
  mode?: "sort-only"
  sortBy: SortOptions,
  search?: boolean
  'data-testid'?: string
}

type FilterRefinementListProps = {
  mode: "filter-only"
  activeFilters?: ActiveFilterOptionValues
  search?: boolean
  data: {
    productCategories: StoreProductCategory[]
  }
  'data-testid'?: string
}

type RefinementListProps = SortRefinementListProps | FilterRefinementListProps;

const RefinementList = (props : RefinementListProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const setQueryParams = (name: string, value: string) => {
    const query = createQueryString(name, value)
    router.push(`${pathname}?${query}`)
  }

  return (
    <div className="flex small:flex-col gap-12 py-4 mb-8 small:px-0 pl-6 small:min-w-[250px] small:ml-[1.675rem]">
      {
        props.mode === "filter-only" ? (
          <FilterProductsByCategory
            data-testid={props["data-testid"]}
            activeFilters={props.activeFilters}
            setQueryParams={setQueryParams}
            productCategories={props.data.productCategories}
          />
        ) : (
          <SortProducts
            sortBy={props.sortBy}
            setQueryParams={setQueryParams}
            data-testid={props["data-testid"]}
          /> 
        )
      }
    </div>
  )
}

export default RefinementList
