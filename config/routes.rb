Rails.application.routes.draw do
  root to: "ideas#index", as: "ideas"
  get "/ideas", to: "ideas#index"
end
