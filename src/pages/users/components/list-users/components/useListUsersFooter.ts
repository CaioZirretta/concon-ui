import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';

const FormSchema = z.object({
  name: z.string(),
  email: z.string().email('E-mail inválido'),
  roles: z.array(z.string()),
  avatar: z.string(),
  gender: z.string().length(1),
  phone: z.string().min(10).max(11),
  residence: z.string().nonempty(),
  building: z.string().optional(),
  unit: z.string().nonempty(),
  birthDate: z.string().date(),
  occupationTitle: z.string().nonempty(),
  currentContractStart: z.string().date(),
  currentContractEnd: z.date(),
});

export const useListUsersFooter = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      gender: '',
      roles: [],
      avatar: '',
      residence: '',
      building: '',
      unit: '',
      occupationTitle: '',
    },
  });
  const [units, setUnits] = useState<{id: string, name: string}[]>([]);
  const [buildings, setBuildings] = useState<{id: string, name: string}[]>([]);
  const [buildingResidences, setBuildingResidences] = useState<{id: string, name: string}[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingResidences, setLoadingResidences] = useState<boolean>(true);

  // Fetch de dados base de unidades, residências e apartamentos com loading
  useEffect(() => {
    setUnits([{ id: '1', name: 'Unidade 1'}, { id: '2', name: 'Unidade 2'}]);
    setBuildings([{ id: '1', name: 'Construção 1'}, { id: '2', name: 'Construção 2'}]);
    setLoading(false)
  }, [])

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    form.reset();
  }

  return {
    form,
    units,
    buildings,
    buildingResidences,
    loading,
    loadingResidences,
    onSubmit
  };
}
