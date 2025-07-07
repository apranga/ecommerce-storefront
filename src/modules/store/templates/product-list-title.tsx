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
      <h1 data-testid="store-page-title">All products</h1>
      { activeCategory ? (
        <Badge size="large">
          <div className="flex flex-row items-center">
            <span className="flex-1 pr-1 italic font-semibold">
              {activeCategory.name}
            </span>
            <IconButton
              variant="transparent"
              onClick={handleRemoveCategory}
            >
              <X size={14}/>
            </IconButton>
          </div>
        </Badge>
      ) : null}
     
    </>
  )
 
};

export default ProductListTitle;