"use client"

import { StoreProductCategory } from "@medusajs/types";
import { Badge, IconButton } from "@medusajs/ui";
import { X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const ProductListTitle = ({
  categoryId,
  data: { productCategories } 
} : {
  categoryId?: string;
  data: {
    productCategories: StoreProductCategory[]
  }
}) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleRemoveCategory = () => {
    router.push(`${pathname}`)
  }

  const activeCategory = productCategories.find((c) => c.id == categoryId )

  return (
    <>
      <h1 data-testid="store-page-title">Products</h1>
      { activeCategory ? (
        <Badge size="large" className={`border-cyan-600 border-2 text-cyan-600 bg-cyan-50`}>
          <div className="flex flex-row items-center">
            <span className="flex-1 pr-1 font-semibold text-cyan-600">
              {activeCategory.name}
            </span>
            <IconButton
              variant="transparent"
              onClick={handleRemoveCategory}
              className="text-cyan-600 hover:bg-transparent"
            >
              <X size={14} className="stroke-cyan-600" />
            </IconButton>
          </div>
        </Badge>
      ) : null}
     
    </>
  )
 
};

export default ProductListTitle;