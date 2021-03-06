# == Schema Information
#
# Table name: matchups
#
#  id           :bigint(8)        not null, primary key
#  team_id      :integer          not null
#  start_points :integer          not null
#  end_points   :integer          not null
#  result       :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  matchup_id   :integer
#  season       :integer          default(1), not null
#

class Matchup < ApplicationRecord
  SEASON = 1

  K_FACTOR = 56.0

  WIN_POINTS = {
    -1 => 14,
    0 => 18,
    1 => 28,
  }

  S_FACTOR = {
    -1 => 0.0,
    0 => 0.5,
    1 => 1.0,
  }

  RESULTS = [-1, 0, 1]

  validates :team_id, :start_points, :end_points, :result, presence: true
  validates :result, :inclusion=> { :in => RESULTS }

  belongs_to :opposite_matchup,
    class_name: :Matchup,
    foreign_key: :matchup_id,
    dependent: :destroy

  has_one :opposing_team,
    through: :opposite_matchup,
    source: :team

  belongs_to :team,
    class_name: :Team,
    foreign_key: :team_id

  after_initialize :add_start_points, :add_season

  def add_start_points
    self.start_points = self.team.points unless self.start_points
  end

  def add_season
    self.season = SEASON
  end

  def calculate_end_points!

    r1 = 10 ** (self.start_points/400.0)
    r2 = 10 ** (self.opposite_matchup.start_points/400.0)
    point_adjustment = K_FACTOR * (S_FACTOR[self.result] - r1/(r1 + r2))

    self.end_points = self.start_points + point_adjustment + play_points + WIN_POINTS[self.result]

  end

  def play_points
    0
    # K_FACTOR.to_i / (2 ** (self.team.matchups.count + 2))
  end

  def self.season
    SEASON
  end

end
