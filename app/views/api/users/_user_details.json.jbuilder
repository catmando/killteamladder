json.users do
  json.set! user.id do
    json.id user.id
    json.firstName user.first_name
    json.lastName user.last_name
    # json.email user.email # commented out for privacy for now

    json.teamIds teams.map { |t| t.id }

    # n+1 going on here
    json.matchesPlayed user.plays
    json.matchesWon user.wins
    json.matchesLost user.losses
    json.matchesTied user.ties
  end
end
