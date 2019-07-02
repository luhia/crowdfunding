package com.joseway.ngspringsec.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.joseway.ngspringsec.model.Proposition;
import com.joseway.ngspringsec.services.PropositionService;

@RestController
@RequestMapping(value="/api/propositions")
//@PreAuthorize("hasRole('USER')")
@PreAuthorize("permitAll()")
public class PropositionControllerApi {


		@Autowired
		private PropositionService ps;
	
		
		
		@GetMapping(value="/{id}")
		public Proposition findById(@PathVariable("id") Long id) {
			return ps.findById(id);
		}
	
	
		
		
		@GetMapping(value="")
		public List<Proposition> findAll() {
			return ps.findAll();
		}
		
		
		
		@PostMapping(value="")
		public Proposition save(@RequestBody Proposition proposition) {
			return ps.save(proposition);
		}
	
		
		
	
		@RequestMapping(value="/{id}/delete")
		public Proposition deleteProposition(@PathVariable("id") Long id) {
			return ps.deleteById(id);
		}
}
