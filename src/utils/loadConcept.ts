export async function loadConcept(category: string, slug: string) {
    try {
      const conceptModule = await import(`@/concepts/${category}/${slug}.ts`);
      return conceptModule.default;
    } catch (error) {
      console.error("Error cargando concepto:", error);
      return null;
    }
  }
  