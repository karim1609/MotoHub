import { create } from 'zustand';
import { supabase } from '../lib/supabase';
import type { Database } from '../types/supabase';

type Motorcycle = Database['public']['Tables']['motorcycles']['Row'];
type ServiceAppointment = Database['public']['Tables']['service_appointments']['Row'];
type TestRide = Database['public']['Tables']['test_rides']['Row'];

interface StoreState {
  motorcycles: Motorcycle[];
  appointments: ServiceAppointment[];
  testRides: TestRide[];
  loading: boolean;
  error: string | null;
  fetchMotorcycles: () => Promise<void>;
  scheduleService: (appointment: Omit<ServiceAppointment, 'id' | 'created_at' | 'status' | 'completed_at'>) => Promise<void>;
  scheduleTestRide: (testRide: Omit<TestRide, 'id' | 'created_at' | 'status'>) => Promise<void>;
}

export const useStore = create<StoreState>((set, get) => ({
  motorcycles: [],
  appointments: [],
  testRides: [],
  loading: false,
  error: null,

  fetchMotorcycles: async () => {
    try {
      set({ loading: true, error: null });
      const { data, error } = await supabase
        .from('motorcycles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      set({ motorcycles: data, loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  scheduleService: async (appointment) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('service_appointments')
        .insert([appointment]);

      if (error) throw error;
      
      // Refresh appointments after scheduling
      const { data: updatedAppointments } = await supabase
        .from('service_appointments')
        .select('*')
        .eq('user_id', appointment.user_id)
        .order('created_at', { ascending: false });

      set({ appointments: updatedAppointments || [], loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },

  scheduleTestRide: async (testRide) => {
    try {
      set({ loading: true, error: null });
      const { error } = await supabase
        .from('test_rides')
        .insert([testRide]);

      if (error) throw error;
      
      // Refresh test rides after scheduling
      const { data: updatedTestRides } = await supabase
        .from('test_rides')
        .select('*')
        .eq('user_id', testRide.user_id)
        .order('created_at', { ascending: false });

      set({ testRides: updatedTestRides || [], loading: false });
    } catch (error) {
      set({ error: (error as Error).message, loading: false });
    }
  },
}));