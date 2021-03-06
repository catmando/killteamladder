Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    patch :passwordreset, to: 'users#password_reset'
    resources :teams, only: [:create, :show, :index, :update]
    resources :matchups, only: [:show, :create, :update, :destroy]
    resources :approved_email, only: [:create, :destroy]
    resource :session, only: [:create, :destroy]
  end

end
