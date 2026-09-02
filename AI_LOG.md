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
