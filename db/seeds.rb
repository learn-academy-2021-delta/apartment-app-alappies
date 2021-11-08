apartments = [
    {
        street: "Adams Ave."
        city: "San Diego"
        state: "California"
        manager: "Susan Wilson"
        email: "susanw@aptlyfe.com"
        price: "$2,100.00"
        bedrooms: "2 bedroom"
        bathrooms: "2 bathrooms"
        pets: "dog and cat friendly"
    },
    {
        street: "Monte Vista way"
        city: "Poway"
        state: "California"
        manager: "Mark Hamilton"
        email: "markh@aptlyfe.com"
        price: "$1,500"
        bedrooms: "1 bedroom"
        bathrooms: "1 bathrooms"
        pets: "no pets"
    },
    {
        street: "Hacienda dr"
        city: "Vista"
        state: "California"
        manager: "Evan Caldera"
        email: "evancaptlyfe.com"
        price: "$2,099.00"
        bedrooms: "2 bedroom"
        bathrooms: "2 bathrooms"
        pets: "small dog and cat friendly"
    },
    {
        street: "Island"
        city: "San Diego"
        state: "California"
        manager: "Amy Harrinton"
        email: "amyh@aptlyfe.com"
        price: "$5,100.00"
        bedrooms: "2 bedroom"
        bathrooms: "2 bathrooms"
        pets: "no pets"
    },
    {
        street: "Natilus."
        city: "La Jolla"
        state: "California"
        manager: "Juan Marquez"
        email: "juanm@aptlyfe.com"
        price: "$6,099.00"
        bedrooms: "3 bedroom"
        bathrooms: "2 bathrooms"
        pets: "dog and cat friendly"
    }
]

first_user = User.first

apartments.each do |attributes|
	Apartment.create attributes
    first_user.apartments.create attributes
end
