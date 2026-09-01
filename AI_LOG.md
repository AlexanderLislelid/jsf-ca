Help debug why standard fonts disappeared after initialising shadcn

- simple change: fix variable name in layout.tsx:

const geistSans = Geist({
variable: "--font-sans",
subsets: ["latin"],
});

01.09.26
