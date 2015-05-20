Rails.application.routes.draw do
  mount MagicLamp::Genie, at: '/magic_lamp' if defined?(MagicLamp)

  root to: "dashboard#index"

  resources :ideas
end
