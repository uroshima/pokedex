class Api::PokemonController < ApplicationController 
    def index 
        @pokemon = Pokemon.all 
    end 

    def create
        @pokemon = Pokemon.new(pokemon_params)
        
        if @pokemon.save!
        render :show
        else
        render json: ["Pokemon can't be created"], status: 422
        end
    end

    def show 
        @pokemon = Pokemon.find(params[:id])
        if @pokemon
            render :show
        else
            render json: ["Pokemon doen't exist"], status: 404
        end
    end

    def pokemon_params
        params.require(:pokemon).permit(:attack, :defense, :image_url, :name, :poke_type)
    end
end

