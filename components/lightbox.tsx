@@ .. @@
           <Image
             src={currentImage.src || "/placeholder.svg"}
             alt={currentImage.title}
             fill
-            className="object-contain"
+            className="object-contain clickable-image"
             sizes="90vw"
             priority
             onLoad={() => setIsLoading(false)}
           />