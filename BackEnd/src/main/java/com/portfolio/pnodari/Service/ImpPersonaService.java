
package com.portfolio.pnodari.Service;

import com.portfolio.pnodari.Entity.Persona;
import com.portfolio.pnodari.Interface.IPersonaService;
import com.portfolio.pnodari.Repository.IPersonaRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImpPersonaService implements IPersonaService{
    //Instanciamos e injectamos las dependencia del Repository
    @Autowired
    IPersonaRepository iPersonaRepository;

    @Override
    public List<Persona> getPersona() {
        List<Persona> persona=iPersonaRepository.findAll();
        return persona;
    }

    @Override
    public void savePersona(Persona pers) {
        iPersonaRepository.save(pers);
    }

    @Override
    public void deletePersona(Long id) {
        iPersonaRepository.deleteById(id);
    }

    @Override
    public Persona findPersona(Long id) {
        Persona findPers=iPersonaRepository.findById(id).orElse(null);
        return findPers;
    }   
    
}
