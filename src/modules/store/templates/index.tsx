import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"
import { listCategories } from "@lib/data/categories"

import {
  ActiveFilterOptionValues
} from "@modules/store/components/refinement-list/filter-products-by-category"

const StoreTemplate = async ({
  page,
  countryCode,
  activeFilters
}: {
  page?: string
  countryCode: string,
  activeFilters: ActiveFilterOptionValues,
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const productCategories = await listCategories();

  return (
    <div
      className="flex flex-col small:flex-row small:items-start py-6 content-container"
      data-testid="category-container"
    >
      <RefinementList
        mode="filter-only"
        activeFilters={activeFilters}
        data={{ productCategories }}
      />
      <div className="w-full">
        <div className="mb-8 text-2xl-semi">
          <h1 data-testid="store-page-title">All products</h1>
        </div>
        <Suspense fallback={<SkeletonProductGrid />}>
          <PaginatedProducts
            page={pageNumber}
            categoryId={activeFilters?.categoryId}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </div>
  )
}

export default StoreTemplate
