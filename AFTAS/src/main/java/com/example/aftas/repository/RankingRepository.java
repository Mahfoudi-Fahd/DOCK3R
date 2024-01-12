package com.example.aftas.repository;

import com.example.aftas.domain.Competition;
import com.example.aftas.domain.Member;
import com.example.aftas.domain.RankId;
import com.example.aftas.domain.Ranking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RankingRepository extends JpaRepository<Ranking, RankId> {
    public Ranking findByCompetitionAndMember(Competition competition, Member member);
    List<Ranking> findTop3ByCompetitionIdOrderByScoreDesc(Long competitionId);

}
