## Help debug why standard fonts disappeared after initialising shadcn

- simple change: fix variable name in layout.tsx:

const geistSans = Geist({
variable: "--font-sans",
subsets: ["latin"],
});

01.09.26

## Created Logo

- Created a basic textlogo for brandname NextAisle webshop and asked AI to make it prettier and with an icon.

* Recieved nice looking logo and icon with hover effect

  02.09.26

## Discount icon

- Asked for suggestion on discount icon to use with my discount percentage display on product cards.

* Learned that I already had lucide-react (a React icon library) installed in the project, ready to use.. I didn't know this beforehand.
  got suggestion on how to import and use

## Smoother hover effect on cards

- needed help creating a smoother hover effect on product cards

* got suggestion: transition-all duration-200 hover:-translate-y-1 hover:shadow-xl
  used it and it looks good

  02.09.26

## Type Zustand cartstore with typescript

- Needed help typing cartStore.ts (followed the module 2 example of creating a cart store in javascipt)

* learned to use<CartState>() to type the entire zustand store (state + actions)

  Also got a suggestion for a productToCartItem helper function to map Product -> CartItem instead of mixing the whole Product object into the shopping cart.

  03.09.26

## redirecting to success page after checkout

- asked if I could use Link to redirect after user clicks checkout.

* Learned that if i wanted to programatically navigate a user I should use useRouter().push() inside my onsubmit function

  05.09.26
