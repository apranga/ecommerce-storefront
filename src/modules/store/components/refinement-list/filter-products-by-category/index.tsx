"use client"

import { StoreProductCategory } from "@medusajs/types"
import FilterRadioGroup from "@modules/common/components/filter-radio-group"

export type ActiveFilterOptionValues = {
  categoryId?: string
}

type FilterProductsByCategoryProps = {
  activeFilters?: ActiveFilterOptionValues,
  productCategories: StoreProductCategory[],
  setQueryParams: (nameToValue: Map<string, string>) => void
  "data-testid"?: string
}


const FilterProductsByCategory = ({
  "data-testid": dataTestId,
  activeFilters,
  setQueryParams,
  productCategories
}: FilterProductsByCategoryProps) => {

  const handleChange = (categoryId: string) => {
    const nameToValue = new Map([
      ["category_id", categoryId],
      ["page", "1"]
    ])
    setQueryParams(nameToValue)
  }

  return (
    <FilterRadioGroup
      // "Categories" is used in all internal logic. "Collections" is only for the presentation to end users on the UI
      title="Filter by Collection"
      items={
        productCategories.map(category => ({
          label: category.name,
          value: category.id
        }))
      }
      value={activeFilters?.categoryId}
      handleChange={handleChange}
      data-testid={dataTestId}
    />
  )
}

export default FilterProductsByCategory
