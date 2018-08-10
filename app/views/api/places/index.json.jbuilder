json.array! @places.each do |place|
  json.id place.id
  json.google_id place.place_id
end