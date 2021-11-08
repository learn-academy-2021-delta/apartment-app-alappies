class Apartment < ApplicationRecord
    validates: :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, presence: true
end
    belongs_to:user
end
