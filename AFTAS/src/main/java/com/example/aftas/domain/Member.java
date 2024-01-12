package com.example.aftas.domain;

import com.example.aftas.domain.Enums.IdentityDocumentType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @Column(name = "id", nullable = false)
    private Long id;

    private Integer number;

    private String firstName;

    private String lastName;

    private LocalDate accessionDate;

    private String nationality;

    private String identityNumber;

    private IdentityDocumentType identityDocumentTypeEnum;

    @JsonIgnore
    @OneToMany(mappedBy = "member")
    private List<Hunting> huntingList;

    @JsonIgnore
    @OneToMany(mappedBy = "member")
    private List<Ranking> rankingList;






}
