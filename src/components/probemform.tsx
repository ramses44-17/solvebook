"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Check, ChevronsUpDown, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Badge } from "./ui/badge"

const niches = [
  {
    id: "1",
    title: "Productivité et Collaboration",
    imageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=Productivity",
    fallback: "PC",
    subNiches: [
      "Gestion de projet",
      "Gestion des tâches personnelles",
      "Collaboration en temps réel",
      "Communication d'équipe",
      "Partage de documents",
      "Suivi de productivité",
      "Automatisation des workflows",
      "Gestion des agendas",
    ],
  },
  {
    id: "2",
    title: "Marketing et Vente",
    imageUrl: "https://via.placeholder.com/150/FF4500/FFFFFF?text=Marketing",
    fallback: "MV",
    subNiches: [
      "Automatisation des e-mails",
      "CRM (gestion des relations clients)",
      "SEO et analyse de site",
      "Gestion des réseaux sociaux",
      "Publicité en ligne",
      "Génération de leads",
      "Analytics et reporting",
      "Marketing de contenu",
    ],
  },
  {
    id: "3",
    title: "Finance et Comptabilité",
    imageUrl: "https://via.placeholder.com/150/FFD700/000000?text=Finance",
    fallback: "FC",
    subNiches: [
      "Gestion des dépenses personnelles",
      "Comptabilité pour entreprises",
      "Facturation et paiements",
      "Budgétisation et prévisions",
      "Gestion des abonnements",
      "Outils d’investissement",
      "Gestion des taxes",
      "Suivi des revenus",
    ],
  },
  {
    id: "4",
    title: "Éducation et Formation",
    imageUrl: "https://via.placeholder.com/150/008000/FFFFFF?text=Education",
    fallback: "EF",
    subNiches: [
      "Plateformes de cours en ligne",
      "Outils d'apprentissage des langues",
      "Formation d'entreprise",
      "Suivi des progrès des étudiants",
      "Création de quiz et tests",
      "Bibliothèques de contenu éducatif",
      "Salles de classe virtuelles",
      "Applications de gestion de formation",
    ],
  },
  {
    id: "5",
    title: "Santé et Bien-être",
    imageUrl: "https://via.placeholder.com/150/FF1493/FFFFFF?text=Health",
    fallback: "SB",
    subNiches: [
      "Suivi de la santé personnelle",
      "Télémédecine",
      "Gestion des dossiers médicaux",
      "Suivi de la santé mentale",
      "Fitness et exercice",
      "Suivi de la nutrition",
      "Applications de méditation",
      "Applications de suivi de sommeil",
    ],
  },
  {
    id: "6",
    title: "Logistique et Supply Chain",
    imageUrl: "https://via.placeholder.com/150/000000/FFFFFF?text=Logistics",
    fallback: "LS",
    subNiches: [
      "Suivi des stocks",
      "Gestion des commandes",
      "Optimisation des itinéraires",
      "Gestion de flotte",
      "Suivi en temps réel",
      "Automatisation des entrepôts",
      "Outils de planification de production",
      "Logiciels de gestion des retours",
    ],
  },
] as const


const ProblemFormSchema = z.object({
  niche_id: z.string({
    required_error: "veuillez selectionné une niche",
  }),
  title:z.optional(z.string().min(10,{
    message:"le titre du probleme doit avoir plus de 10 charactere"
  }).max(50,{
    message:"le titre du probleme doit avoir moins de 50 charactere"
  })),
  description:z.string({
    required_error:"veuillez entré une description"
  }).min(20,{
    message:"la description doit avoir plus de 20 charactere"
  }).max(150,{
    message:"la description doit avoir moins de 150 charactere"
  }),
  subniches:z.array(z.string(),{
    required_error:"please select sub-niches"
  }).min(1,{
    message:"please select at least one sub-niche"
  }).max(3,{
    message:"please select less than 3 sub niches"
  })
})

export function ProblemForm() {
  const form = useForm<z.infer<typeof ProblemFormSchema>>({
    resolver: zodResolver(ProblemFormSchema),
  })

  function onSubmit(data: z.infer<typeof ProblemFormSchema>) {
    
    console.log(data);
    
  }
  const watchNiche = form.watch('niche_id')
  const selectedNiche = niches.find(niche=>niche.id === watchNiche)
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
      <FormField
          control={form.control}
          name="niche_id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>niche</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={field.value ? true : undefined}
                      className="w-full justify-between"
                    >
                      {field.value ? (
                        <div className="flex items-center gap-2">
                          <Avatar className="h-6 w-6">
                            <AvatarImage
                              src={niches.find(niche => niche.id === field.value)?.imageUrl}
                              alt={niches.find(niche => niche.id === field.value)?.title}
                            />
                            <AvatarFallback>
                              {niches.find(niche => niche.id === field.value)?.fallback}
                            </AvatarFallback>
                          </Avatar>
                          {niches.find(niche => niche.id === field.value)?.title}
                        </div>
                      ) : (
                        "Select niche..."
                      )}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Search niche..." />
                      <CommandList>
                        <CommandEmpty>No niche found.</CommandEmpty>
                        <CommandGroup>
                          {niches.map((niche) => (
                            <CommandItem
                              key={niche.id}
                              value={niche.id}
                              onSelect={() => {
                                form.setValue("niche_id", niche.id)
                                form.setValue("subniches", [])
                              }}
                            >
                              <Avatar className="h-6 w-6 mr-2">
                                <AvatarImage src={niche.imageUrl} alt={niche.title} />
                                <AvatarFallback>{niche.fallback}</AvatarFallback>
                              </Avatar>
                              {niche.title}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  field.value === niche.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
        control={form.control}
        name="title"
        render={({field})=>(    
          <FormItem>
            <FormLabel>
              titre
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder="entrez le titre de votre probleme" {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
  )}
        />
        <FormField
        control={form.control}
        name="description"
        render={({field})=>(    
          <FormItem>
            <FormLabel>
              description
            </FormLabel>
            <FormControl>
              <Textarea rows={5} placeholder="entrez le corps de votre probleme  ex: je cherche une solution pour..." {...field}/>
            </FormControl>
            <FormMessage/>
          </FormItem>
  )}
        />
         <FormField
          control={form.control}
          name="subniches"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sous Niche</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn("w-full justify-between", !watchNiche && "opacity-50")}
                      disabled={!watchNiche}
                    >
                      {field?.value?.length > 0
                        ? `${field?.value?.length} sous niche selectionné`
                        : "Selectionnez des sous niche..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput placeholder="Rechercher une sous niche..." />
                      <CommandList>
                        <CommandEmpty>Aucune sous niche trouvé.</CommandEmpty>
                        <CommandGroup>
                          {selectedNiche?.subNiches.map((subNiche) => (
                            <CommandItem
                              key={subNiche}
                              value={subNiche}
                              onSelect={() => {
                                const newValue = field?.value.includes(subNiche)
                                  ? field?.value.filter((value) => value !== subNiche)
                                  : [...field?.value, subNiche]
                                form.setValue("subniches", newValue, { shouldValidate: true })
                              }}
                            >
                              {subNiche}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  field?.value.includes(subNiche) ? "opacity-100" : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <div className="flex flex-wrap gap-2 mt-2">
                {field?.value?.map((value) => (
                  <Badge key={value} variant="secondary">
                    {value}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="ml-1 h-4 w-4 p-0"
                      onClick={() => {
                        const newValue = field.value.filter((v) => v !== value)
                        form.setValue("subniches", newValue, { shouldValidate: true })
                      }}
                    >
                      <X className="h-3 w-3" />
                    </Button>
                  </Badge>
                ))}
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">soumettre</Button>
      </form>
    </Form>
  )
}
