class Api::PlacesController < ApplicationController
  def index
    @places = Place.all
    render "index.json.jbuilder"
  end

  def create
    @place = Place.new(
        place_id: params[:place_id]
      )
    @place.save
    render "show.json.jbuilder"
  end
end
