### This project is a product listing page built using React that displays a grid of products with options for filtering, sorting, and viewing detailed product information through modals.

#### KEY FEATURES

Product Cards: Each product is displayed as a card with its image, name, price, and rating. When clicked, a modal opens to show detailed information, including a product description.

Filter Sidebar:

1. Category Filter: Allows users to filter products based on their category (e.g., Electronics, Clothing).
2. Price Range Filter: A custom range slider to filter products within a specified price range.
3. Rating Filter: Filters products by their rating (e.g., 4 stars and above).
4. Sorting: Products can be sorted by price in ascending or descending order using a dropdown menu.

Load More Button: Loads additional products when clicked, allowing for infinite scrolling-like functionality.

Responsiveness: The layout adapts to various screen sizes:

1. On larger screens, products are displayed in a flexbox grid with the filter sidebar on the left.
2. On smaller screens (mobile), the filter sidebar is toggleable, and product cards are displayed in a single column.
3. Modal for Product Details: When a product card is clicked, a modal displays detailed information (image, name, price, description) in a side-by-side layout on desktop and a stacked layout on mobile.

##### OPTIMISATIONS

1. Used React.memo to prevent re-rendering of unchanged component.
2. Flexbox is used for a responsive, flexible layout.
3. Media queries ensure the UI adapts to different screen sizes.
4. Have used useMemo to cache results of filtered products.
5. Have used single .filter method for all type of filter instead of using .filter method for every kind of filter for eg. Price, category etc.

##### ENHANCEMENTS

1. Add a product image zoom (Like magnifying)
2. Better mobile experience.
3. Global state management, so that loading between api's can be done from single state and much more.
4. Persist filters and sorting.
5. Searching functionality with debouncing.
6. Make UI better.

#### BUILT THIS IN UNDER 3 HOURS AS I HAVE CURRENT COMPANY'S WORK, SO HAD TO DEVELOP IN HURRY. CAN OPTIMISE AND ADD ENCHANCEMENTS IF REQUIRED.
