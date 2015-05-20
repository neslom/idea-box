Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  root to: "dashboard#index"

  get '/ideas/:id/upvote', to: 'ideas#upvote'

  resources :ideas
end
