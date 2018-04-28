Rails.application.routes.draw do
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :v1 do
  	resources :users

    get "user/:user_id/like/shops/:shop_id"     => "shops#like"  
    get "user/:user_id/dislike/shops/:shop_id"  => "shops#dislike" 
    
  end
end
