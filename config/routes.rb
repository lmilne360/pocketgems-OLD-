Rails.application.routes.draw do
  root to: "static_pages#root"
  get '/favorites' => "static_pages#favorites"
  post '/search' => "static_pages#search"

  get '*path' => "static_pages#root"
end
