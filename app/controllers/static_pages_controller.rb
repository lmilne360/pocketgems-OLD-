class StaticPagesController < ApplicationController

  def root
  end

  def favorites
  end

  def search
    @gemsurl = "https://rubygems.org/gems/"
    details = Gems.search(params["search-term"]).first.with_indifferent_access
    dependencies = []
    dependencies << details[:dependencies][:development]
    dependencies << details[:dependencies][:runtime]

    if details["name"].downcase == params['search-term'].downcase
    @gem = details
    @gem[:dependencies] = dependencies.flatten
    binding.pry
    else
      @gem = nil
    end
    #binding.pry
    render :root
  end

end
