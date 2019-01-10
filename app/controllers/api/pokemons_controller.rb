class Api::PokemonController < ApplicationController 
    def index 
        @pokemon = Pokemon.all 
    end 

    def show 
        @pokemon = Pokemon.find(params[:id])
        if @pokemon
            render :show
        else
            render json: ["Pokemon doen't exist"], status: 404
        end
    end
end