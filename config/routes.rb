CloudEdit::Application.routes.draw do
  resources :documents
  root :to => "home#index"
end
