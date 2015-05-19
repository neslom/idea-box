Rails.application.routes.draw do
  root to: "dashboard#index"
  resources :ideas
end
