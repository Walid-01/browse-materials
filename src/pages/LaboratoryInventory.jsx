import React, { useMemo, useState, useEffect } from "react";
import SlideBare from "../Components/SlideBare";
import ThemeToggle from "../Components/ThemeToggle";
import InventoryFilters from "../Components/InventoryFilters";
import MaterialCard from "../Components/MaterialCard";
import MaterialCardSkeleton from "../Components/MaterialCardSkeleton";
import { Icon } from "../Components/Icon";

export default function LaboratoryInventory() {
  const [materials, setMaterials] = useState([]); // backend data
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);

  const itemsPerPage = 9;

  useEffect(() => {
    // Quand le backend sera prêt, remplace ceci par ton fetch réel
    // fetch("http://localhost:5000/materials")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setMaterials(data);
    //     setLoading(false);
    //   })
    //   .catch(() => setLoading(false));

    setTimeout(() => {
      setMaterials([]); // vide pour tester le skeleton
      setLoading(false);
    }, 800);
  }, []);

  const filteredMaterials = useMemo(() => {
    return materials.filter((item) => {
      const matchesSearch =
        item.title?.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "all" ? true : item.categoryKey === category;

      return matchesSearch && matchesCategory;
    });
  }, [materials, search, category]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredMaterials.length / itemsPerPage)
  );

  const currentItems = filteredMaterials.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const startItem =
    filteredMaterials.length === 0 ? 0 : (page - 1) * itemsPerPage + 1;
  const endItem =
    filteredMaterials.length === 0
      ? 0
      : Math.min(page * itemsPerPage, filteredMaterials.length);

  return (
    <div className="li-layout">
      <SlideBare activeLabel="Browse Materials" />

      <main className="li-main">
        <div className="li-page-shell">
          <div className="li-topbar">
            <div>
              <h1>Laboratory Inventory</h1>
              <p>Browse and search all available materials</p>
            </div>
            <ThemeToggle />
          </div>

          <InventoryFilters
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            total={filteredMaterials.length}
          />

          <section className="li-grid">
            {loading ? (
              Array.from({ length: 6 }).map((_, index) => (
                <MaterialCardSkeleton key={index} />
              ))
            ) : currentItems.length > 0 ? (
              currentItems.map((item) => (
                <MaterialCard
                  key={item.id}
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  category={item.category}
                  location={item.location}
                  status={item.status}
                />
              ))
            ) : null}
          </section>

          {!loading && filteredMaterials.length > 0 && (
            <div className="li-pagination-card">
              <div className="li-pagination-info">
                Page {page} of {totalPages} • Showing {startItem} to {endItem} of{" "}
                {filteredMaterials.length} materials
              </div>

              <div className="li-pagination-controls">
                <button
                  type="button"
                  className="li-page-btn"
                  onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                  disabled={page === 1}
                >
                  <Icon.chevronLeft />
                  <span>Previous</span>
                </button>

                {Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      className={`li-page-number ${
                        page === pageNumber ? "active" : ""
                      }`}
                      onClick={() => setPage(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  );
                })}

                <button
                  type="button"
                  className="li-page-btn"
                  onClick={() =>
                    setPage((prev) => Math.min(totalPages, prev + 1))
                  }
                  disabled={page === totalPages}
                >
                  <span>Next</span>
                  <Icon.chevronRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}