package com.portfolio.pnodari.Interface;

import com.portfolio.pnodari.Entity.Persona;
import java.util.List;

public interface IPersonaService {
    //Traer una persona
    public List<Persona> getPersona();
    
    //Guardar objeto persona
    public void savePersona(Persona pers);
    
    //Eliminar objeto por Id
    public void deletePersona(Long id);
    
    //Buscar persona
    public Persona findPersona(Long id);
}
