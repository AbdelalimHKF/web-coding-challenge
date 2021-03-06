Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1 do
  	resources :users, only: [:show , :index, :update]
    resources :sessions, only: :create

    post "users" => "sign_up#create"  

    get "users/:user_id/nearby_shops"     => "shops#nearby_shops"      # list all shops excluding liked ones
    get "users/:user_id/preferred_shops"  => "shops#preferred_shops"   # list all liked shops by a user 

    get "user/:user_id/like/shops/:shop_id"     => "shops#like"        
    get "user/:user_id/dislike/shops/:shop_id"  => "shops#dislike"     
    get "user/:user_id/remove/shops/:shop_id"   => "shops#remove"
 
  end
end
