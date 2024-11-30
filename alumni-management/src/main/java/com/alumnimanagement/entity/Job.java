package com.alumnimanagement.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import java.time.LocalDate;

@Entity
public class Job {
    @Id
    private String id;

    @Column(nullable = false)
    private String companyName;
    @Column(nullable = false)
    private String requiredSkills;
    @Column(nullable = false)
    private String description;
    @Column(nullable = false)
    private LocalDate postDate;
    @Column(nullable = false)
    private LocalDate lastDate;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", nullable = false)
    private User createdBy;
    @Column(nullable = false)
    private Integer noOfOpenPositions;
}