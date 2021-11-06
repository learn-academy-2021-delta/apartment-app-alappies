class ApartmentsController < ApplicationController
     def index
        apartments = Apartments.all
        render json: cats
    end
    def create
        apartment = Apartment.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render jsoon: cat.errors, status: 422
        end
    end
    def update
        apartment = Apartment.find(params[:id])
        apartment.update(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render jsoon: cat.errors, status: 422
        end
    end
    def destroy
        apartment = Apartment.find(params[:id])
        apartment.destroy
        render json: apartment
    end
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
    end
end
        

