@@ .. @@
                   <Image
                     src={product.image || "/placeholder.svg"}
                     alt={product.name}
                     width={300}
                     height={400}
-                    className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer"
+                    className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-105 cursor-pointer clickable-image"
                     onClick={() => openLightbox(index)}
                   />
                 </div>