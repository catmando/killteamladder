json.teams do
  json.set! team.id do
    json.id team.id
    json.faction team.faction
    json.teamName team.team_name
    json.user team.user_id
  end
end