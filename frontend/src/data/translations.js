export const translations = {
  es: {
    languageToggle: {
      current: 'Idioma actual: español',
      primaryLabel: 'Idioma principal'
    },
    common: {
      amount: 'Monto',
      date: 'Fecha',
      person: 'Persona',
      name: 'Nombre',
      profilesLabel: 'Perfiles'
    },
    login: {
      heroHeading: 'Bienvenidos / Benvenuti',
      heroSubtitle: 'Una herramienta vibrante para armonizar los sueños de Paola y Carlo.',
      accessTitle: 'Accede a tu presupuesto',
      email: 'Correo electrónico',
      password: 'Contraseña',
      submit: 'Ingresar',
      forgot: '¿Olvidaste tu contraseña?'
    },
    nav: {
      ariaPrimary: 'Navegación principal',
      ariaPages: 'Páginas principales',
      logoSubtitle: 'Presupuesto Fusión',
      links: {
        dashboard: 'Panel',
        categories: 'Categorías',
        reports: 'Informes'
      }
    },
    dashboard: {
      sections: {
        quickEntry: 'Añadir movimientos',
        dataInsights: 'Datos y estadísticas'
      },
      quickAdd: {
        title: 'Registro rápido',
        description: 'Captura ingresos y gastos con toques culturales personalizados.',
        addIncome: 'Agregar ingreso',
        addExpense: 'Agregar gasto'
      },
      spotlightToggle: 'Cambiar foco cultural',
      kpis: {
        totalIncome: {
          label: 'Ingresos totales',
          change: '+8% vs. mes anterior'
        },
        totalExpenses: {
          label: 'Gastos totales',
          change: '-3% vs. mes anterior'
        },
        remainingBudget: {
          label: 'Presupuesto restante',
          change: 'Paola 48% / Carlo 52%'
        }
      },
      expenseBreakdown: {
        groceries: 'Supermercado',
        rent: 'Renta',
        transport: 'Transporte',
        dining: 'Comidas',
        culture: 'Cultura'
      },
      incomeStreams: {
        paolaStudio: 'Estudio de arte de Paola',
        carloConsultancy: 'Consultoría de Carlo',
        sharedRentals: 'Alquileres compartidos'
      },
      timeline: {
        title: 'Actividad reciente',
        headers: {
          name: 'Movimiento',
          person: 'Persona',
          date: 'Fecha',
          amount: 'Monto'
        },
        items: {
          mercadoGroceries: 'Mercado Roma - despensa semanal',
          florenceMetro: 'Pases de metro de Florencia',
          weddingPhotography: 'Sesión fotográfica de boda',
          espressoPopup: 'Pop-up de espresso artesano',
          artSupplies: 'Lienzos y pinturas artesanales',
          consultingRetainer: 'Retenedor de consultoría internacional'
        }
      },
      spotlights: {
        paola: {
          title: 'Enfoque de Paola',
          description: 'Prepara enchiladas suizas en casa para ahorrar €25 esta semana.'
        },
        carlo: {
          title: 'Enfoque de Carlo',
          description: 'Usa el abono mensual del tranvía y ahorra €15 en combustible.'
        }
      },
      charts: {
        expenseBreakdown: 'Distribución de gastos',
        incomeStreams: 'Fuentes de ingreso',
        tooltipAmount: 'Monto'
      }
    },
    categories: {
      title: 'Gestión de categorías',
      subtitle: 'Organiza etiquetas con el ritmo de mariachi y melodías italianas.',
      filtersLabel: 'Filtros',
      addCategory: 'Agregar categoría',
      close: 'Cerrar',
      form: {
        name: 'Nombre',
        accent: 'Acento cultural',
        save: 'Guardar'
      },
      headers: {
        category: 'Categoría',
        subcategories: 'Subcategorías',
        culturalTag: 'Etiqueta cultural',
        actions: 'Acciones'
      },
      actions: {
        edit: 'Editar',
        delete: 'Eliminar'
      },
      cultureLabels: {
        mexico: 'Mexicana',
        italy: 'Italiana',
        fusion: 'Fusión'
      },
      filtersList: {
        all: 'Todas',
        mexico: 'Mexicanas',
        italy: 'Italianas',
        fusion: 'Fusión'
      },
      footer: '🎺 Celebra tus ahorros como mariachi, ☕ saborea cada logro con espresso.',
      newDescription: 'Nueva categoría cultural',
      items: {
        groceries: {
          name: 'Supermercado',
          description: 'Mercados locales + Mercato Centrale'
        },
        housing: {
          name: 'Vivienda',
          description: 'Apartamento en Trastevere'
        },
        celebrations: {
          name: 'Celebraciones',
          description: 'Fiestas familiares y festivales'
        },
        travel: {
          name: 'Viajes',
          description: 'Visitas a familia en CDMX y Roma'
        }
      }
    },
    reports: {
      title: 'Informes',
      subtitle: 'Crea historias financieras con subrayados tricolores dinámicos.',
      filters: {
        aria: 'Filtros de informe',
        dateFrom: 'Fecha inicial',
        dateTo: 'Fecha final'
      },
      exportCsv: 'Exportar CSV',
      exportPdf: 'Exportar PDF',
      filterCategories: {
        housing: 'Vivienda',
        groceries: 'Supermercado',
        travel: 'Viajes'
      },
      charts: {
        stackedTitle: 'Gasto por cultura',
        savingsTitle: 'Proyección de ahorros',
        tooltipAmount: 'Monto',
        tooltipSavings: 'Ahorros'
      },
      summaryTitle: 'Resumen mensual',
      tableHeaders: {
        month: 'Mes',
        income: 'Ingresos',
        expenses: 'Gastos',
        savings: 'Ahorros'
      },
      months: {
        jan: 'Ene',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Abr',
        may: 'May',
        january: 'Enero',
        february: 'Febrero',
        march: 'Marzo'
      }
    },
    modal: {
      title: 'Registrar movimiento',
      tabs: {
        income: 'Registrar ingreso',
        expense: 'Registrar gasto'
      },
      subtitle: 'Desliza entre sombrero y góndola para dividir aportes.',
      ariaTabs: 'Elegir tipo de movimiento',
      amount: 'Monto (€)',
      date: 'Fecha',
      description: 'Descripción',
      category: 'Categoría',
      split: 'Repartir entre Paola (sombrero) y Carlo (góndola)',
      saveIncome: 'Guardar ingreso',
      saveExpense: 'Guardar gasto',
      cancel: 'Cancelar',
      categories: {
        groceries: 'Supermercado',
        transport: 'Transporte',
        housing: 'Vivienda',
        leisure: 'Ocio'
      }
    }
  },
  it: {
    languageToggle: {
      current: 'Lingua attuale: italiano',
      primaryLabel: 'Lingua principale'
    },
    common: {
      amount: 'Importo',
      date: 'Data',
      person: 'Persona',
      name: 'Nome',
      profilesLabel: 'Profili'
    },
    login: {
      heroHeading: 'Benvenuti / Bienvenidos',
      heroSubtitle: 'Uno strumento vibrante per armonizzare i sogni di Paola e Carlo.',
      accessTitle: 'Accedi al tuo budget',
      email: 'Email',
      password: 'Password',
      submit: 'Accedi',
      forgot: 'Password dimenticata?'
    },
    nav: {
      ariaPrimary: 'Navigazione principale',
      ariaPages: 'Pagine principali',
      logoSubtitle: 'Bilancio Fusion',
      links: {
        dashboard: 'Cruscotto',
        categories: 'Categorie',
        reports: 'Report'
      }
    },
    dashboard: {
      sections: {
        quickEntry: 'Registra movimenti',
        dataInsights: 'Dati e statistiche'
      },
      quickAdd: {
        title: 'Aggiunta rapida',
        description: 'Registra entrate e uscite con tocchi culturali personalizzati.',
        addIncome: 'Aggiungi entrata',
        addExpense: 'Aggiungi spesa'
      },
      spotlightToggle: 'Scambia il focus culturale',
      kpis: {
        totalIncome: {
          label: 'Entrate totali',
          change: '+8% vs. mese precedente'
        },
        totalExpenses: {
          label: 'Spese totali',
          change: '-3% vs. mese precedente'
        },
        remainingBudget: {
          label: 'Budget restante',
          change: 'Paola 48% / Carlo 52%'
        }
      },
      expenseBreakdown: {
        groceries: 'Spesa',
        rent: 'Affitto',
        transport: 'Trasporti',
        dining: 'Ristoranti',
        culture: 'Cultura'
      },
      incomeStreams: {
        paolaStudio: 'Studio d’arte di Paola',
        carloConsultancy: 'Consulenza di Carlo',
        sharedRentals: 'Affitti condivisi'
      },
      timeline: {
        title: 'Attività recente',
        headers: {
          name: 'Movimento',
          person: 'Persona',
          date: 'Data',
          amount: 'Importo'
        },
        items: {
          mercadoGroceries: 'Spesa settimanale al Mercado Roma',
          florenceMetro: 'Abbonamenti metro Firenze',
          weddingPhotography: 'Servizio fotografico di nozze',
          espressoPopup: 'Pop-up di espresso artigianale',
          artSupplies: 'Tele e colori artigianali',
          consultingRetainer: 'Anticipo consulenza internazionale'
        }
      },
      spotlights: {
        paola: {
          title: 'Focus di Paola',
          description: 'Prepara enchiladas suizas a casa e risparmia €25 questa settimana.'
        },
        carlo: {
          title: 'Focus di Carlo',
          description: 'Usa l’abbonamento mensile del tram e risparmia €15 di carburante.'
        }
      },
      charts: {
        expenseBreakdown: 'Ripartizione delle spese',
        incomeStreams: 'Fonti di entrata',
        tooltipAmount: 'Importo'
      }
    },
    categories: {
      title: 'Gestione categorie',
      subtitle: 'Organizza le etichette al ritmo del mariachi e con melodie italiane.',
      filtersLabel: 'Filtri',
      addCategory: 'Aggiungi categoria',
      close: 'Chiudi',
      form: {
        name: 'Nome',
        accent: 'Accento culturale',
        save: 'Salva'
      },
      headers: {
        category: 'Categoria',
        subcategories: 'Sottocategorie',
        culturalTag: 'Tag culturale',
        actions: 'Azioni'
      },
      actions: {
        edit: 'Modifica',
        delete: 'Elimina'
      },
      cultureLabels: {
        mexico: 'Messicana',
        italy: 'Italiana',
        fusion: 'Fusion'
      },
      filtersList: {
        all: 'Tutte',
        mexico: 'Messicane',
        italy: 'Italiane',
        fusion: 'Fusion'
      },
      footer: '🎺 Festeggia i risparmi come un mariachi, ☕ assapora ogni traguardo con un espresso.',
      newDescription: 'Nuova categoria culturale',
      items: {
        groceries: {
          name: 'Spesa',
          description: 'Mercati locali + Mercato Centrale'
        },
        housing: {
          name: 'Abitazione',
          description: 'Appartamento a Trastevere'
        },
        celebrations: {
          name: 'Celebrazioni',
          description: 'Feste di famiglia e festival'
        },
        travel: {
          name: 'Viaggi',
          description: 'Visite a famiglia a Città del Messico e Roma'
        }
      }
    },
    reports: {
      title: 'Report',
      subtitle: 'Crea storie finanziarie con sottolineature tricolori dinamiche.',
      filters: {
        aria: 'Filtri dei report',
        dateFrom: 'Data inizio',
        dateTo: 'Data fine'
      },
      exportCsv: 'Esporta CSV',
      exportPdf: 'Esporta PDF',
      filterCategories: {
        housing: 'Abitazione',
        groceries: 'Spesa',
        travel: 'Viaggi'
      },
      charts: {
        stackedTitle: 'Spesa per cultura',
        savingsTitle: 'Proiezione risparmi',
        tooltipAmount: 'Importo',
        tooltipSavings: 'Risparmi'
      },
      summaryTitle: 'Riepilogo mensile',
      tableHeaders: {
        month: 'Mese',
        income: 'Entrate',
        expenses: 'Spese',
        savings: 'Risparmi'
      },
      months: {
        jan: 'Gen',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'Mag',
        january: 'Gennaio',
        february: 'Febbraio',
        march: 'Marzo'
      }
    },
    modal: {
      title: 'Registrare movimento',
      tabs: {
        income: 'Registra entrata',
        expense: 'Registra spesa'
      },
      subtitle: 'Fai scorrere tra sombrero e gondola per dividere i contributi.',
      ariaTabs: 'Scegli il tipo di movimento',
      amount: 'Importo (€)',
      date: 'Data',
      description: 'Descrizione',
      category: 'Categoria',
      split: 'Dividi tra Paola (sombrero) e Carlo (gondola)',
      saveIncome: 'Salva entrata',
      saveExpense: 'Salva spesa',
      cancel: 'Annulla',
      categories: {
        groceries: 'Spesa',
        transport: 'Trasporti',
        housing: 'Abitazione',
        leisure: 'Tempo libero'
      }
    }
  },
  en: {
    languageToggle: {
      current: 'Current language: English',
      primaryLabel: 'Primary language'
    },
    common: {
      amount: 'Amount',
      date: 'Date',
      person: 'Person',
      name: 'Name',
      profilesLabel: 'Profiles'
    },
    login: {
      heroHeading: 'Welcome',
      heroSubtitle: 'A vibrant tool to harmonize Paola and Carlo’s dreams.',
      accessTitle: 'Access your budget',
      email: 'Email',
      password: 'Password',
      submit: 'Sign in',
      forgot: 'Forgot password?'
    },
    nav: {
      ariaPrimary: 'Primary navigation',
      ariaPages: 'Main pages',
      logoSubtitle: 'Fusion Budget',
      links: {
        dashboard: 'Dashboard',
        categories: 'Categories',
        reports: 'Reports'
      }
    },
    dashboard: {
      sections: {
        quickEntry: 'Add new entry',
        dataInsights: 'Data & insights'
      },
      quickAdd: {
        title: 'Quick add',
        description: 'Capture income and expenses with personalized cultural flair.',
        addIncome: 'Add income',
        addExpense: 'Add expense'
      },
      spotlightToggle: 'Swap cultural spotlight',
      kpis: {
        totalIncome: {
          label: 'Total income',
          change: '+8% vs. last month'
        },
        totalExpenses: {
          label: 'Total expenses',
          change: '-3% vs. last month'
        },
        remainingBudget: {
          label: 'Remaining budget',
          change: 'Paola 48% / Carlo 52%'
        }
      },
      expenseBreakdown: {
        groceries: 'Groceries',
        rent: 'Rent',
        transport: 'Transport',
        dining: 'Dining',
        culture: 'Culture'
      },
      incomeStreams: {
        paolaStudio: 'Paola art studio',
        carloConsultancy: 'Carlo consultancy',
        sharedRentals: 'Shared rentals'
      },
      timeline: {
        title: 'Recent activity',
        headers: {
          name: 'Name',
          person: 'Person',
          date: 'Date',
          amount: 'Amount'
        },
        items: {
          mercadoGroceries: 'Mercado Roma groceries',
          florenceMetro: 'Florence metro passes',
          weddingPhotography: 'Wedding photography gig',
          espressoPopup: 'Espresso bar pop-up',
          artSupplies: 'Artisan canvas & paints',
          consultingRetainer: 'Consulting retainer invoice'
        }
      },
      spotlights: {
        paola: {
          title: 'Paola’s spotlight',
          description: 'Prepare enchiladas suizas at home to save €25 this week.'
        },
        carlo: {
          title: 'Carlo’s spotlight',
          description: 'Use the monthly tram pass and save €15 on fuel.'
        }
      },
      charts: {
        expenseBreakdown: 'Expense breakdown',
        incomeStreams: 'Income streams',
        tooltipAmount: 'Amount'
      }
    },
    categories: {
      title: 'Category management',
      subtitle: 'Organize labels with mariachi rhythm and Italian melodies.',
      filtersLabel: 'Filters',
      addCategory: 'Add category',
      close: 'Close',
      form: {
        name: 'Name',
        accent: 'Cultural accent',
        save: 'Save'
      },
      headers: {
        category: 'Category',
        subcategories: 'Subcategories',
        culturalTag: 'Cultural tag',
        actions: 'Actions'
      },
      actions: {
        edit: 'Edit',
        delete: 'Delete'
      },
      cultureLabels: {
        mexico: 'Mexican',
        italy: 'Italian',
        fusion: 'Fusion'
      },
      filtersList: {
        all: 'All',
        mexico: 'Mexican',
        italy: 'Italian',
        fusion: 'Fusion'
      },
      footer: '🎺 Celebrate savings like mariachi, ☕ savor each win with espresso.',
      newDescription: 'New cultural category',
      items: {
        groceries: {
          name: 'Groceries',
          description: 'Local markets + Mercato Centrale'
        },
        housing: {
          name: 'Housing',
          description: 'Apartment in Trastevere'
        },
        celebrations: {
          name: 'Celebrations',
          description: 'Family fiestas and festivals'
        },
        travel: {
          name: 'Travel',
          description: 'Trips to family in CDMX and Rome'
        }
      }
    },
    reports: {
      title: 'Reports',
      subtitle: 'Craft financial stories with dynamic tricolour highlights.',
      filters: {
        aria: 'Report filters',
        dateFrom: 'Date from',
        dateTo: 'Date to'
      },
      exportCsv: 'Export CSV',
      exportPdf: 'Export PDF',
      filterCategories: {
        housing: 'Housing',
        groceries: 'Groceries',
        travel: 'Travel'
      },
      charts: {
        stackedTitle: 'Culture stacked spend',
        savingsTitle: 'Savings projection',
        tooltipAmount: 'Amount',
        tooltipSavings: 'Savings'
      },
      summaryTitle: 'Monthly summaries',
      tableHeaders: {
        month: 'Month',
        income: 'Income',
        expenses: 'Expenses',
        savings: 'Savings'
      },
      months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        january: 'January',
        february: 'February',
        march: 'March'
      }
    },
    modal: {
      title: 'Record entry',
      tabs: {
        income: 'Record income',
        expense: 'Record expense'
      },
      subtitle: 'Slide between sombrero and gondola to split contributions.',
      ariaTabs: 'Choose entry type',
      amount: 'Amount (€)',
      date: 'Date',
      description: 'Description',
      category: 'Category',
      split: 'Split between Paola (sombrero) and Carlo (gondola)',
      saveIncome: 'Save income',
      saveExpense: 'Save expense',
      cancel: 'Cancel',
      categories: {
        groceries: 'Groceries',
        transport: 'Transport',
        housing: 'Housing',
        leisure: 'Leisure'
      }
    }
  }
};
