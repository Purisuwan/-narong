@@ .. @@
             /* Prevent image dragging */
             img {
               -webkit-user-drag: none;
               -khtml-user-drag: none;
               -moz-user-drag: none;
               -o-user-drag: none;
               user-drag: none;
               pointer-events: none;
             }
             
             /* Re-enable pointer events for clickable images */
             .clickable-image {
               pointer-events: auto;
               cursor: pointer;
             }
             
             /* Disable highlighting */
             ::selection {
               background: transparent;
             }
             
             ::-moz-selection {
               background: transparent;
             }
             
             /* Prevent context menu on images */
             img {
               -webkit-touch-callout: none;
               -webkit-user-select: none;
               -khtml-user-select: none;
               -moz-user-select: none;
               -ms-user-select: none;
               user-select: none;
             }
           `,
           }}
         />
         <script
           dangerouslySetInnerHTML={{
             __html: `
             // Disable right-click context menu
             document.addEventListener('contextmenu', function(e) {
               e.preventDefault();
               return false;
             });
             
             // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
             document.addEventListener('keydown', function(e) {
               // F12
               if (e.keyCode === 123) {
                 e.preventDefault();
                 return false;
               }
               // Ctrl+Shift+I
               if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
                 e.preventDefault();
                 return false;
               }
               // Ctrl+Shift+J
               if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
                 e.preventDefault();
                 return false;
               }
               // Ctrl+U
               if (e.ctrlKey && e.keyCode === 85) {
                 e.preventDefault();
                 return false;
               }
               // Ctrl+S
               if (e.ctrlKey && e.keyCode === 83) {
                 e.preventDefault();
                 return false;
               }
               // Ctrl+A
               if (e.ctrlKey && e.keyCode === 65) {
                 e.preventDefault();
                 return false;
               }
               // Ctrl+C
               if (e.ctrlKey && e.keyCode === 67) {
                 e.preventDefault();
                 return false;
               }
             });
             
             // Disable drag and drop
             document.addEventListener('dragstart', function(e) {
-              e.preventDefault();
-              return false;
+              // Only prevent drag for images, allow other elements
+              if (e.target.tagName === 'IMG') {
+                e.preventDefault();
+                return false;
+              }
             });
             
             // Disable print screen (limited effectiveness)
             document.addEventListener('keyup', function(e) {
               if (e.keyCode === 44) {
                 e.preventDefault();
                 return false;
               }
             });
             
             // Disable image saving via drag
             document.addEventListener('DOMContentLoaded', function() {
               const images = document.querySelectorAll('img');
               images.forEach(function(img) {
                 img.addEventListener('dragstart', function(e) {
                   e.preventDefault();
                   return false;
                 });
+                
+                // Add additional protection for right-click on images
+                img.addEventListener('contextmenu', function(e) {
+                  e.preventDefault();
+                  e.stopPropagation();
+                  return false;
+                });
               });
             });
           `,
           }}
         />